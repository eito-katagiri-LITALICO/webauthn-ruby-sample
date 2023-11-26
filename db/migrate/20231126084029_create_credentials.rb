# frozen_string_literal: true

class CreateCredentials < ActiveRecord::Migration[7.1]
  def change
    create_table :credentials do |t|
      t.references :user, null: false, foreign_key: true

      t.string :external_id, null: false
      t.string :public_key, null: false
      t.string :nickname, null: false
      t.bigint :sign_count, null: false, default: 0

      t.timestamps
    end
  end
end
