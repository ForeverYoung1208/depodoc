# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_20_194502) do

  create_table "companies", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.string "code"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "docstate_changes", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "document_id", null: false
    t.bigint "from_state_id", null: false
    t.bigint "to_state_id", null: false
    t.bigint "user_id", null: false
    t.text "note"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["document_id"], name: "index_docstate_changes_on_document_id"
    t.index ["from_state_id"], name: "index_docstate_changes_on_from_state_id"
    t.index ["to_state_id"], name: "index_docstate_changes_on_to_state_id"
    t.index ["user_id"], name: "index_docstate_changes_on_user_id"
  end

  create_table "docstates", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.text "possible_changes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "doctypes", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "documents", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.bigint "face_id", null: false
    t.text "note"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "doctype_id", null: false
    t.index ["doctype_id"], name: "index_documents_on_doctype_id"
    t.index ["face_id"], name: "index_documents_on_face_id"
  end

  create_table "faces", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "code"
    t.string "name"
    t.text "note"
    t.boolean "is_fiz"
    t.boolean "is_resident"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "operations", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "side1", null: false
    t.bigint "side2", null: false
    t.bigint "company", null: false
    t.bigint "manager", null: false
    t.bigint "optype", null: false
    t.text "note"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "operations_documents", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "operation_id", null: false
    t.bigint "document_id", null: false
    t.index ["document_id"], name: "index_operations_documents_on_document_id"
    t.index ["operation_id"], name: "index_operations_documents_on_operation_id"
  end

  create_table "opstate_changes", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "operation_id", null: false
    t.date "date"
    t.bigint "from_state_id", null: false
    t.bigint "to_state_id", null: false
    t.bigint "user_id", null: false
    t.text "note"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["from_state_id"], name: "index_opstate_changes_on_from_state_id"
    t.index ["operation_id"], name: "index_opstate_changes_on_operation_id"
    t.index ["to_state_id"], name: "index_opstate_changes_on_to_state_id"
    t.index ["user_id"], name: "index_opstate_changes_on_user_id"
  end

  create_table "opstates", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.text "possible_changes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "optypes", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "roles", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "roles_users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "role_id"
    t.bigint "user_id"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["role_id"], name: "index_roles_users_on_role_id"
    t.index ["user_id"], name: "index_roles_users_on_user_id"
  end

  add_foreign_key "docstate_changes", "docstates", column: "from_state_id"
  add_foreign_key "docstate_changes", "docstates", column: "to_state_id"
  add_foreign_key "docstate_changes", "documents"
  add_foreign_key "documents", "doctypes"
  add_foreign_key "documents", "faces"
  add_foreign_key "operations_documents", "documents"
  add_foreign_key "operations_documents", "operations"
  add_foreign_key "opstate_changes", "operations"
  add_foreign_key "opstate_changes", "opstates", column: "from_state_id"
  add_foreign_key "opstate_changes", "opstates", column: "to_state_id"
end
