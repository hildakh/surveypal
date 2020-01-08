class CreateUserTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :user_types do |t|
      t.string :name, null: false
      t.string :description

      t.timestamps
    end
  end
end
