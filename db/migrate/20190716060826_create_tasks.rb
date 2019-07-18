class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :title
      t.references :user, foreign_key: true
      t.references :group, foreign_key: true
      t.date :task_date
      t.time :task_start
      t.time :task_end

      t.timestamps
    end
  end
end
