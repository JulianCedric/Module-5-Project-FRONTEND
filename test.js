









create_table "reminders", force: :cascade do |t|
t.integer "habit_id"
t.integer "duration"
t.integer "startDate"
t.integer "endDate"
t.boolean "active"
t.boolean "stickified"
t.datetime "created_at", precision: 6, null: false
t.datetime "updated_at", precision: 6, null: false

<div class="ui inverted segment">

    <div role="list" class="ui divided inverted relaxed list">

        <div role="listitem" class="item"><div class="content"><div class="header">Snickerdoodle</div>An excellent companion</div></div>

        <div role="listitem" class="item"><div class="content"><div class="header">Poodle</div>A poodle, its pretty basic</div></div>
        
        <div role="listitem" class="item"><div class="content"><div class="header">Paulo</div>He&#x27;s also a dog</div></div>
    
    </div>

</div>