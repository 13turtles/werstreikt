module ApplicationHelper
  ALLOWED_TAGS = %w(a pre b i em)

  def clearer
    content_tag(:div, '', :class => 'clearer')
  end

  def nbsp(x=1)
    ("&nbsp;" * x).html_safe
  end

  def d(date)
    date.strftime('%d.%m.%Y') if date
  end

  def is_owner?(object)
    current_user.try(:is_owner?, object)
  end

  def like_button(url, options={})
    width = options[:width] || 450
    raw %Q{<iframe src="http://www.facebook.com/plugins/like.php?href=#{url}&amp;layout=standard&amp;show_faces=true&amp;width=#{width}&amp;action=like&amp;font&amp;colorscheme=light&amp;height=80" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:#{width}px; height:80px;" allowTransparency="true"></iframe>}
  end

  def strike_rss_url
    if Rails.env.production?
      'http://feeds.feedburner.com/Werstreikt-Aktuelle-Streiks'
    else
      strikes_url(:format => :rss)
    end
  end

  def safe(txt)
    sanitize(txt, :tags => ALLOWED_TAGS, :attributes => %w(href)).split("\n").join("\n<br />").html_safe
  end
end
