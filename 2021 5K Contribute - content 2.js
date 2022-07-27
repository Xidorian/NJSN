function submit_search() {
	var name = jQuery.trim(jQuery("input#participant_name").val());
	var ename = jQuery.trim(jQuery("input#event_name").val());
	if (name == "" && ename == "") {
		alert('Please enter a participant name to search for');
	} else {
		get_participants(0, name, ename);
	}
	return false;
}

function submit_team_search() {
	var tname = jQuery.trim(jQuery("input#tsearch_tname").val());
	var ename = jQuery.trim(jQuery("input#tsearch_ename").val());
	if (tname == "" && ename == "") {
		alert('Please enter a team name to search for');
	} else {
		get_teams(0, tname, ename);
	}
	return false;
}
