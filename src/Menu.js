import React from 'react';  

class Menu extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
            {/* <div class="ui three item menu">
  <a class="item">
    A
  </a>
  <a class="item">
    B
  </a>
  <a class="item active">
    C
  </a>
</div> */}


{/* <div class="ui vertical demo menu">
  <a class="active item">
    A
  </a>
  <a class="item">
    B
    <div class="ui label">1</div>
  </a>
  <div class="item">
  <div class="ui transparent icon input">
<input type="text" placeholder="Search..."/>
<i class="search icon"></i>
    </div>
  </div>
</div> */}


{/* <div class="ui tabular menu">
  <a class="active item">
    Tab
  </a>
  <a class="item">
    Tab
  </a>
</div> */}

<div class="ui inverted text demo menu">
  <a class="active item">
    A
  </a>
  <a class="item">
    B
  </a>
  <a class="item">
    C
  </a>
</div>




<div class="ui inverted secondary demo menu">
  <a class="item active">
    A
  </a>
  <a class="item">
    B
  </a>
  <a class="item">
    C
  </a>
</div>



<div class="ui inverted secondary pointing three item demo menu">
  <a class="item active">
    A
  </a>
  <a class="item">
    B
  </a>
  <a class="item">
    C
  </a>
</div>
<div class="ui inverted secondary vertical demo menu">
  <a class="item">
    A
  </a>
  <a class="item">
    B
  </a>
  <a class="item active">
    C
  </a>
</div>
<div class="ui inverted secondary pointing vertical demo menu">
  <a class="item">
    A
  </a>
  <a class="item active">
    B
  </a>
  <a class="item">
    C
  </a>
</div>
</div>

        );
    }
}

export default Menu;

 
{/* export default Menu;


<script type="text/javascript">
$(document)
  .ready(function(){
    $('.demo .example .menu a.item')
.on('click', function() {
  if(!$(this).hasClass('dropdown')) {
    $(this)
      .addClass('active')
      .closest('.ui.menu')
      .find('.item')
        .not($(this))
        .removeClass('active')
    ;
  }
})
    ;
  })
;
</script> */}