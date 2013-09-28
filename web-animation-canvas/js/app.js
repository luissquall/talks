(function(window, document, undefined) {
	var CoordinateSystem = window.CoordinateSystem;

	var PlaneFactory = {
		makePlane: function(id) {
			var csNode = document.getElementById(id),
				csWidth = csNode.width,
				csHeight = csNode.height,
				csCtx = csNode.getContext('2d'),
				cs;

			csCtx.clearRect(0, 0, csWidth, csHeight);
			cs = new CoordinateSystem(csCtx);

			return cs;
		}
	};

	var App = {
		load: function() {
			this.init();
		},

		init: function() {
			var p1 = PlaneFactory.makePlane('cs-1'),
				p2 = PlaneFactory.makePlane('cs-2'),
				p3 = PlaneFactory.makePlane('cs-3'),
				p4 = PlaneFactory.makePlane('cs-4'),
				p5 = PlaneFactory.makePlane('cs-5'),
				p6 = PlaneFactory.makePlane('cs-6');

			p1.draw();

			p2.drawBackground();

			p3.drawBackground();
			p3.drawGrid();

			p4.drawBackground();
			p4.drawGrid();
			p4.drawAxes();

			p5.drawBackground();
			p5.drawGrid();
			p5.drawAxes();
			p5.drawLabels();

			p6.drawBackground();
			p6.drawGrid();
			p6.drawAxes();
			p6.drawLabels();
			p6.drawDots();
		}
	};

	App.load();
}(window, window.document));