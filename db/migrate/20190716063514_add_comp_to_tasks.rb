class AddCompToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :comp, :boolean
  end
end
