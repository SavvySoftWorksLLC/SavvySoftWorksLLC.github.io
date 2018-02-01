xml.instruct!
xml.feed "xmlns" => "http://www.w3.org/2005/Atom" do
  site_url = "http://savvysoftworks.com"
  xml.title "SavvySoftWorks | Audiophiles"
  xml.id "http://savvysoftworks.com/av/audiophiles"
  xml.link "href" => "http://savvysoftworks.com/av/audiophiles"
  xml.link "href" => "http://savvysoftworks.com/av/audiophiles/feed.xml", "rel" => "self"
  xml.updated blog.articles.first.date.to_time.iso8601
  xml.author { xml.name "SavvySoftWorks, LLC" }
 
  audiophiles.articles.each do |audio|
    xml.entry do
      xml.title audio.title
      xml.link "rel" => "alternate", "href" => audio.url
      xml.id audio.url
      xml.published audio.date.to_time.iso8601
      xml.updated audio.date.to_time.iso8601
      xml.author { xml.name "SavvySoftWorks, LLC" }
      xml.summary audio.summary, "type" => "html"
      xml.content audio.body, "type" => "html"
    end
  end
end
