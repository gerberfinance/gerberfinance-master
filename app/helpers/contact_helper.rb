module ContactHelper
  ActionView::Base.field_error_proc = Proc.new do |html_tag, instance|
  errors = Array(instance.error_message).join(',')
  %(#{html_tag}<span class="validation-error" style="font-size:12px; color:red; float:right;">&nbsp;#{errors}</span>).html_safe
  end
end
