class Message

  include ActiveModel::Validations
  include ActiveModel::Conversion
  extend ActiveModel::Naming

  attr_accessor :name, :company, :address, :telephone, :area, :city, :state, :zip, :tel1, :tel2, :email, :btype, :ptype, :sales, :ar, :inventory, :comments, :creditline, :cmethod

  validates :name, :presence => {:message => "Please fill in your name" }
  validates :btype, :presence => {:message => "Please select one" }
  validates :address, :presence => {:message => "Please fill in your street address" }
  validates :city, :presence => {:message => "City Required" }
  validates :state, :presence => {:message => "State Required/" }
  validates :zip, :numericality => {:message => "Zip Required /" }
  validates :email, :format => { :with => %r{.+@.+\..+}, :message => "Email address is not valid"}
  validates :area, :length => {:minimum => 3, :too_short => " ** "} 
  validates :tel1, :length => {:minimum => 3, :too_short => " ** "} 
  validates :tel2, :length => {:minimum => 4, :too_short => " ** "} 
  def initialize(attributes = {})
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end
  
  def persisted?
    false
  end
  
end