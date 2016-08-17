class CreateHits < ActiveRecord::Migration[5.0]
  def change
    create_table :hits do |t|
      t.string :client_ip

      t.timestamps
    end
  end
end
