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
