class CreateUsers < ActiveRecord::Migration

  def change
    create_table :users do |t|
      #we specify the type of the column and its name
      t.string :email
      t.string :password_digest

      #a user into the db with the same email as another, the insert will fail
      t.index(:email, unique: true)

      #created_at, updated_at, good for record keeping
      t.timestamps
    end
  end

end
