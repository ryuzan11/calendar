class GroupsController < ApplicationController
  before_action :authenticate_user!

  # def show
  #   @group = Group.find(params[:id])
  # end

  def new
    @group = Group.new
    @group.users << current_user
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to user_path(current_user.id), notice: 'グループを作成しました'
    else
      render :new
    end
  end

  def destroy
    group = Group.find(params[:id])
    group.destroy
    redirect_to user_path(current_user.id)
  end

  private
  def group_params
    params.require(:group).permit(:name, { :user_ids => [] })
  end

end
