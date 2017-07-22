<?php
if (!empty($_GET['action'])) 
    {
	//look if an action was performed
	if ($_GET['action'] ==  'add') {
		$arr = array('');
			$count = 0;
                $sum = 0;
					$failedToindent = 1
		foreach ($arr as $value) {
		    if ($_POST[$value] 
			!= 'none'){
		      $count = $count + 1;
			    
		      $sum = $sum + sqlEscape($_POST[$value]) ;
		  }
		           }
     }
}

// An an na an as
// undefiend

// repeat undefiend
>
