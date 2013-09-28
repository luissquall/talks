(function(window, document, undefined) {

	function CoordinateSystem(context) {
		this.ctx = context;
		this.width = 500;
		this.height = 375;
	}

	CoordinateSystem.prototype.drawBackground = function() {
		this.ctx.fillStyle ='#FFF';
		this.ctx.fillRect(0, 0, 500, 375);
	};

	CoordinateSystem.prototype.drawGrid = function() {
		// Vertical lines
		for (var x = 0.5; x < 500; x += 10) {
			this.ctx.moveTo(x, 0);
			this.ctx.lineTo(x, 375);
		}

		// Horizontal lines
		for (var y = 0.5; y < 375; y += 10) {
			this.ctx.moveTo(0, y);
			this.ctx.lineTo(500, y);
		}

		// Draw it!
		this.ctx.strokeStyle = "#eee";
		this.ctx.stroke();
	};

	CoordinateSystem.prototype.drawAxes = function() {
		// X-axis
		this.ctx.beginPath();
		this.ctx.moveTo(0, 40);
		this.ctx.lineTo(240, 40);
		this.ctx.moveTo(260, 40);
		this.ctx.lineTo(500, 40);
		this.ctx.moveTo(495, 35);
		this.ctx.lineTo(500, 40);
		this.ctx.lineTo(495, 45);

		// Y-axis
		this.ctx.moveTo(60, 0);
		this.ctx.lineTo(60, 153);
		this.ctx.moveTo(60, 173);
		this.ctx.lineTo(60, 375);
		this.ctx.moveTo(65, 370);
		this.ctx.lineTo(60, 375);
		this.ctx.lineTo(55, 370);

		// Draw it!
		this.ctx.strokeStyle = "#000";
		this.ctx.stroke();
	};

	CoordinateSystem.prototype.drawLabels = function() {
		this.ctx.fillStyle ='#000';
		
		this.ctx.font = "bold 12px sans-serif";
		this.ctx.fillText("x", 248, 43);
		this.ctx.fillText("y", 58, 165);

		this.ctx.textBaseline = "top";
		this.ctx.fillText("( 0 , 0 )", 8, 5);

		this.ctx.textAlign = "right";
		this.ctx.textBaseline = "bottom";
		this.ctx.fillText("( 500 , 375 )", 492, 370);
	};

	CoordinateSystem.prototype.drawDots = function() {
		this.ctx.fillStyle ='#000';
		this.ctx.fillRect(0, 0, 3, 3);
		this.ctx.fillRect(497, 372, 3, 3);
	};

	CoordinateSystem.prototype.draw = function() {
		// Draw it!
		this.drawBackground();
		this.drawGrid();
		this.drawAxes();
		this.drawLabels();
		this.drawDots();
	};
	
	window.CoordinateSystem = CoordinateSystem;
}(window, window.document));