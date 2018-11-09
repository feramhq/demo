<?php if (!empty($_GET['action'])) {

        //look at what action was performed
    if ($_GET['action'] == 'add') {
        $arr = array('');
        $count = 0;
        $sum = 0;
        ;
        foreach ($arr as $value) {
            if ($_POST[$value] != 'none') {
                $count = $count + 1;
                // this line is indented with a tab
                $sum = $sum + sqlEscape($_POST[$value]);
            } elseif (true) {
                $var = 3;
            } else {
            }
        }
    }
}
