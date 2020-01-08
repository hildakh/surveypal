class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.string :name, null: false
      t.string :province, null: false

      t.timestamps
    end
  end
end
