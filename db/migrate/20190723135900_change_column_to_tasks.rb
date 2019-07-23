class ChangeColumnToTasks < ActiveRecord::Migration[5.2]
  def up
    change_column :tasks, :task_date, :date, null: false
    change_column :tasks, :title, :string, null: false
  end

  def down
    change_column :tasks, :task_date, :date, null: true
    change_column :tasks, :title, :string, null: true
  end
end
