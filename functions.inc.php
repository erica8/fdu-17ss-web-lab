<?php

function generateLink($url, $label, $class) {
   $link = '<a href="' . $url . '" class="' . $class . '">';
   $link .= $label;
   $link .= '</a>';
   return $link;
}
 $imgTags = "";

function outputPostRow($number)  {

include("travel-data.inc.php");

switch($number){
case 1: echo<<<EOF

<div class="container-fluid">
  <div class="container-fluid">

       <div class="row">
        <div class="col-md-4">
       <img src="images/$thumb1">
      </div>
       <div class="col-md-8">
        <h2>$title1</h2>
         Posted by <font style="color: #2b3ad3">$userName1</font> <font style="padding-left: 20em"> $date1</font><br>
     <img src="images/star-gold.svg" width="16" /><img src="images/star-gold.svg" width="16" /><img src="images/star-gold.svg" width="16" />
        <img src="images/star-white.svg" width="16" /><img src="images/star-white.svg" width="16" />
        $reviewsNum1 Reviews  <br>
         $excerpt1<Br>
          <button type="button" class="btn btn-primary">Read more</button>

</div>
    </div>
    </div>
    </div><hr/>
EOF;

break;



case 2: echo<<<EOF

<div class="container-fluid">
  <div class="container-fluid">

       <div class="row">
        <div class="col-md-4">
       <img src="images/$thumb2">
      </div>
       <div class="col-md-8">
        <h2>$title2</h2>
         Posted by <font style="color: #2b3ad3">$userName2</font> <font style="padding-left: 15em"> $date2</font><br>

    <img src="images/star-gold.svg" width="16" /><img src="images/star-gold.svg" width="16" /><img src="images/star-gold.svg" width="16" />
      <img src="images/star-gold.svg" width="16" /><img src="images/star-gold.svg" width="16" />$reviewsNum2 Reviews  <br>
         $excerpt2<Br>
          <button type="button" class="btn btn-primary">Read more</button>

</div>
    </div>
    </div>
    </div><hr/>
EOF;

break;



case 3: echo<<<EOF

<div class="container-fluid">
  <div class="container-fluid">

       <div class="row">
        <div class="col-md-4">
       <img src="images/$thumb3">
      </div>
       <div class="col-md-8">
        <h2>$title3</h2>
         Posted by <font style="color: #2b3ad3">$userName3</font> <font style="padding-left: 16em"> $date3</font><br>
<img src="images/star-gold.svg" width="16" /><img src="images/star-gold.svg" width="16" /><img src="images/star-gold.svg" width="16" />
<img src="images/star-white.svg" width="16" /><img src="images/star-white.svg" width="16" />

         $reviewsNum3 Reviews  <br>
         $excerpt3<Br>
          <button type="button" class="btn btn-primary">Read more</button>

</div>
    </div>
    </div>
    </div><hr/>
EOF;

}



}

/*
  Function constructs a string containing the <img> tags necessary to display
  star images that reflect a rating out of 5
*/
function constructRating($rating) {
    $imgTags = "";
    
    // first output the gold stars
    for ($i=0; $i < $rating; $i++) {
        $imgTags .= '<img src="images/star-gold.svg" width="16" />';
        echo $imgTags;
    }
    
    // then fill remainder with white stars
    for ($i=$rating; $i < 5; $i++) {
        $imgTags .= '<img src="images/star-white.svg" width="16" />';
    }    

    return $imgTags;    
}

?>