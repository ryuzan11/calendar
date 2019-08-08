class TasksController < ApplicationController
  before_action :authenticate_user!, :group_info
  # befor_action :user_info

  def index
    @tasks = Task.where(group_id: params[:group_id]).order('task_start ASC')
    respond_to do |format|
      format.html
      format.json { @new_task = @tasks.where('id > ?', params[:id]) }
    end
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      @tasks = Task.where(group_id: params[:group_id])
      render json: @tasks, status: :created
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # def update
  #   @task = Task.find(params[:id])
  #   if @task.user_id == current_user.id
  #     @task.update(task_params)
  #   end
  # end

  def destroy
    task = Task.find(params[:id])
    task.destroy
    redirect_back(fallback_location: group_tasks_path(group_info[:id]))
  end

  private

  def task_params
    params.permit(:title, :task_date, :task_start, :task_end, :comp, :user_id, :group_id)
  end

  def group_info
    @group = Group.find(params[:group_id])
  end

  # def user_info
  #   @user = User.find(current_user.id)
  # end

end
