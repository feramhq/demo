<?php
if (!empty($_GET['action'])) 
    {
	//look if a action was performed
	if ($_GET['action'] == 'add') {
		$arr = array('');
		$count = 0;
                $sum = 0;
		foreach ($arr as $value) {
		    if ($_POST[$value] != 'none'){
		      $count = $count + 1;
			    
		      $sum = $sum + sqlEscape($_POST[$value]) ;
		  }
		           }
	}
}
