<?
$extendPeriodTaskGet = $_GET['status'];
if ($extendPeriodTaskGet == 'openmodal') {

?>
	<script>console.log('67+2')</script>

	<script> 

	let extendPeriodTask = document.querySelector("[data-target='.time-modal_in_progress']");
		console.log(extendPeriodTask); 

	// extendPeriodTask.click();	

	document.addEventListener('DOMContentLoaded', function(){
		// setTimeout(function(){
	 	// $('button').trigger('click');
		//   console.log('67+12');
		//   extendPeriodTask.click();
		// }, 1000);

		extendPeriodTask.click();

		const url = new URL(document.location);
		const searchParams = url.searchParams;
		searchParams.delete("status"); // удалить параметр "status"
		window.history.pushState({}, '', url.toString());
	});

	</script>;

<?
};
?>
