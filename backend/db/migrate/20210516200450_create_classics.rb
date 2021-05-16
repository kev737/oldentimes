class CreateClassics < ActiveRecord::Migration[6.0]
  def change
    create_table :classics do |t|
      t.string :phrase
      t.string :definition

      t.timestamps
    end
  end
end
