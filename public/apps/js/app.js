$(document).ready(function() {
    $('#domainTable').dataTable({
        "pagingType": "full_numbers"
    });
} );

jQuery(document).ready(function() {
  jQuery("time.timeago").timeago();
});

$("input[name='aliases']").TouchSpin({
    min: 0,
    max: 1000000,
    stepinterval: 50,
    maxboostedstep: 10000000
});

$("input[name='mailboxes']").TouchSpin({
    min: 0,
    max: 1000000,
    stepinterval: 50,
    maxboostedstep: 10000000
});

$("input[name='quota']").TouchSpin({
    min: 0,
    max: 1000000,
    stepinterval: 50,
    maxboostedstep: 10000000
});

$.fn.bootstrapSwitch.defaults.size = 'mini';

$("[name='active']").bootstrapSwitch();
$("[name='backupmx']").bootstrapSwitch();