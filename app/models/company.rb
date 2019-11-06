class Company < ApplicationRecord
	default_scope ->{ where("deleted_at IS NULL")}

	has_many :operations


end
