class Bench < ApplicationRecord
  validates :lat, presence: true
  validates :lng, presence: true
  validates :description, presence: true
end