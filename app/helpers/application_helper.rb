module ApplicationHelper
  def clearer
    content_tag(:div, '', :class => 'clearer')
  end

  def nbsp(x=1)
    ("&nbsp;" * x).html_safe
  end

  def d(date)
    date.strftime('%d.%m.%Y') if date
  end
end
