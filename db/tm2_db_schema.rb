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

ActiveRecord::Schema.define(version: 2019_02_24_210945) do

  create_table "aautos", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.string "autodesc"
    t.string "autonumber"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "contact"
  end

  create_table "actions", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "kind"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "aorders", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "onname"
    t.time "ftime"
    t.time "totime"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "aauto_id"
    t.integer "odate_id"
    t.string "adestination"
    t.string "ondepartment"
    t.string "contact"
    t.boolean "iscanceled"
    t.string "comment"
    t.integer "user_id"
    t.integer "odobegin", default: 0
    t.integer "odoend", default: 0
    t.integer "outofcity", default: 0
    t.integer "department_id"
  end

  create_table "callists", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.text "data", size: :medium
    t.string "filename"
    t.integer "loadedby_id"
    t.boolean "isparsed"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["loadedby_id"], name: "index_callists_on_loadedby_id"
  end

  create_table "calls", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "tel_number"
    t.string "datetime"
    t.string "calltype"
    t.string "direction"
    t.integer "dest_number"
    t.integer "duration"
    t.decimal "cost_bal", precision: 15, scale: 2
    t.decimal "cost_nodiscount", precision: 15, scale: 2
    t.integer "user_id"
    t.integer "callist_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_calls_on_user_id"
  end

  create_table "companies", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.boolean "istabelling"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "departments", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.integer "company_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_departments_on_company_id"
  end

  create_table "odates", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.date "thedate"
    t.boolean "isclosed"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "was_used", default: false
  end

  create_table "onlineautos", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "aauto_id"
    t.integer "odate_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "onduty"
  end

  create_table "sessions", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "session_id", null: false
    t.text "data"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_id"], name: "index_sessions_on_session_id"
    t.index ["updated_at"], name: "index_sessions_on_updated_at"
  end

  create_table "telnumbers", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "tel_number"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "userlevels", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "email"
    t.string "name"
    t.string "password_hash"
    t.string "password_salt"
    t.integer "userlevel_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "company_id"
    t.boolean "is_ip_controlled", default: true
    t.string "ip_address"
    t.datetime "deleted_at"
  end

end
