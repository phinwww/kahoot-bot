<html>
<body>

Submitted data --
PIN:  <?php echo $_POST["pin"]; ?><br>
BOT Username: <?php echo $_POST["name"]; ?>


<?php
shell_exec('node kahoot.js --pin $_POST["pin"] --name $_POST["name"]');
?>
</body>
</html>
