module ApplicationHelper
	
  def yn(bool_var)
    bool_var ? "Так" : "Ні"
  end

  def fa_link_to(icon, *args, &block)

  	link_to(*args) do
  		concat content_tag("span", nil, class: "fas fa#{icon}")
  		concat ' '
  		concat capture &block
  	end
  end

  def mainmenu_li( p, *args, &block)
    p[:synonyms]||=[]
  	args[0][:class] += " active" if ( p[:current].match( p[:menuitem] ) or p[:synonyms].include?( p[:current] ) )
		content_tag("li", *args) do
			capture &block
  	end
  end

  def mainmenu_item( p, *args, &block)
  	mainmenu_li(p, class: "nav-item") do
  		link_to( p[:menuitem], class: "nav-link #{'disabled' if !p[:active]}" ) do
  			capture &block
  		end
  	end
  end


  def mainmenu_dropdown( p, &block)
    paths = []
    p[:menuitems].each { |name, path| paths<<path[0] }

    args = {class: "nav-item dropdown"}
    args[:class] += " active" if paths.include?( p[:current] )

    content_tag("li", args) do
      content_tag("a", {
        class: "nav-link dropdown-toggle",
        href: "",
        id: "navbarDropdownMenuLink1",
        'data-toggle': "dropdown",
        'aria-haspopup': "true",
        'aria-expanded': "false"
      }) { capture &block } +
      content_tag("div", { class: "dropdown-menu", 'aria-labelledby': "navbarDropdownMenuLink1" }) do 
        p[:menuitems].collect do |name, path|
          if path[1] == true #active
            concat( link_to( path[0], class: "dropdown-item" ){ name } )
          else #not active
            concat( tag.span( class: "dropdown-item disabled" ){ name } )
          end

            
        end
      end

    end

  end	
end
