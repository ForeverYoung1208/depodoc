class Tm2Record < ApplicationRecord
	self.abstract_class = true	
  connects_to database: { writing: :tm2_db, reading: :tm2_db }
  # establish_connection: :users_db

end