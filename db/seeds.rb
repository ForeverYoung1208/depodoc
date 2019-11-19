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
		manager: User.where("name = 'admin'").first,
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
		operation: operations[0],
		from_state: opstates[0],
		to_state: opstates[1]
	}),
	OpstateChange.where(id: 2).first_or_create({
		operation: operations[0],
		from_state: opstates[1],
		to_state: opstates[2]
	})	
]



