class NotificationsMailer < ActionMailer::Base

  default :from => 'noreply@gerberfinance.com'

  def new_message(message)
    @message = message
    attachments["Finance_Application.pdf"] = File.read("#{Rails.root}/public/assets/Finance_Application.pdf")
	mail(:to => message.email, :subject => "Thank you for contacting Gerber Finance Inc.")
  end
  
  
  def new_request(message)
  	 @message = message
      mail(:to => "gjoseph@gerberfinance.com", :subject => "A New Request",
     		:cc => ["jpalmer@gerberfinance.com", "sjoseph@gerberfinance.com"])     
  end 
  
  def profit=(num)
  num.gsub!(',','') if num.is_a?(String)
  self[:profit] = num
end
end
