# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'date'


# IMPORTANT! frontend relys on role.id
roles = [
	Role.where(id: 1).first_or_create(
		name: 'admin'
	),
	Role.where(id: 2).first_or_create(
		name: 'user'
	),

]

# IMPORTANT! first admin names will be binded to 'admin' and 'siafin2010@gmail.com'
admin_users_ids = User.where("name = 'admin' or name = 'siafin2010@gmail.com'").pluck(:id)
roles[0].bind_to_users!(admin_users_ids)


# below assignments only for testing

current_user = User.where("name = 'admin'").first

faces=[
	Face.where(id: 1).first_or_create({
    code: 'face0001',
    name: 'face1-jur-resident',
    note: 'note on test face1',
    is_fiz: false,
    is_resident: true
	}),
	Face.where(id: 2).first_or_create({
    code: 'face0002',
    name: 'face2-fiz-resident',
    note: 'note on test face1',
    is_fiz: true,
    is_resident: true
	}),
]

companies=[
	Company.where(id: 1).first_or_create({
		name: 'company1',
		code: 'company0001'
	}),
	Company.where(id: 2).first_or_create({
		name: 'company2',
		code: 'company0002'
	})	
]

optypes=[
	Optype.where(id: 1).first_or_create({
		name: 'optype1'
	}),
	Optype.where(id: 2).first_or_create({
		name: 'optype2'
	}),
]
doctypes=[
	Doctype.where(id: 1).first_or_create({
		name: 'anketa1'
	}),
	Doctype.where(id: 2).first_or_create({
		name: 'many documents2'
	}),
]


opstates=[
	Opstate.where(id: 1).first_or_create({
		name: 'opstate1-2',
		possible_changes: [2]
	}),
	Opstate.where(id: 2).first_or_create({
		name: 'opstate2-3',
		possible_changes: [3]
	}),	
	Opstate.where(id: 3).first_or_create({
		name: 'opstate3-2,4',
		possible_changes: [2,4]
	}),
	Opstate.where(id: 3).first_or_create({
		name: 'opstate4-1',
		possible_changes: [1]
	})
]

docstates=[
	Docstate.where(id: 1).first_or_create({
		name: 'docstate1-2',
		possible_changes: [2]
	}),
	Docstate.where(id: 2).first_or_create({
		name: 'docstate2-3',
		possible_changes: [3]
	}),	
	Docstate.where(id: 3).first_or_create({
		name: 'docstate3-2,4',
		possible_changes: [2,4]
	}),
	Docstate.where(id: 3).first_or_create({
		name: 'docstate4-1',
		possible_changes: [1]
	})
]



operations=[
	Operation.where(id: 1).first_or_create({
		side1: faces[0],
		side2: faces[1],
		company: companies[0],
		manager: current_user,
		optype: optypes[0]
	}),
	Operation.where(id: 2).first_or_create({
		side1: faces[1],
		side2: faces[0],
		company: companies[0],
		manager: User.where("name = 'admin'").first,
		optype: optypes[1]
	})
]


opstate_changes=[
	OpstateChange.where(id: 1).first_or_create({
		from_state: opstates[0],
		to_state: opstates[1],
		operation: operations[0],
		user: current_user,
		note: 'opstate_change1 note',
		date: '2019-11-20'
	}),
	OpstateChange.where(id: 2).first_or_create({
		from_state: opstates[1],
		to_state: opstates[2],
		operation: operations[0],
		user: current_user,
		note: 'opstate_change2 note',
		date: '2019-11-20'
	}),
	OpstateChange.where(id: 2).first_or_create({
		from_state: opstates[2],
		to_state: opstates[3],
		operation: operations[0],
		user: current_user,
		note: 'opstate_change3 note',
		date: '2019-11-21'
	})	
]

documents=[
	Document.where(id: 1).first_or_create({
		name: 'document1_name',
		face: faces[0],
		note: 'document1_note',
		doctype: doctypes[0]
	}),
	Document.where(id: 2).first_or_create({
		name: 'document2_name',
		face: faces[1],
		note: 'document2_note',
		doctype: doctypes[1]
	}),	
]

docstate_changes=[
	DocstateChange.where(id: 1).first_or_create({
		from_state: docstates[0],
		to_state: docstates[1],
		document: documents[0],
		user: current_user,
		note: 'docstate_change1 note'
	}),
	DocstateChange.where(id: 2).first_or_create({
		from_state: docstates[1],
		to_state: docstates[2],
		document: documents[1],
		user: current_user,
		note: 'docstate_change2 note'
	}),
	DocstateChange.where(id: 3).first_or_create({
		from_state: docstates[2],
		to_state: docstates[3],
		document: documents[1],
		user: current_user,
		note: 'docstate_change3 note'
		
	})	
]

operations[0].documents<<documents
operations[0].save!
