!function(a){
	var b=function(b,c){this.$self=b,this.settings=a.extend(a.fn.donutpie.defaults,c)};
	b.prototype.display=function(){
		var b=this.settings.radius/2;
		this.svg=d3.select(this.$self[0]).append("svg").attr("width",2*b).attr("height",2*b).append("g"),this.svg.append("g").attr("class","slices"),this.pie=d3.layout.pie().sort(null).value(function(a){return a.hvalue}),this.arc=d3.svg.arc().outerRadius(.8*b).innerRadius(.4*b),this.outerArc=d3.svg.arc().innerRadius(.9*b).outerRadius(.9*b),this.svg.attr("transform","translate("+b+","+b+")");
		var c=this.settings.tooltipClass;
		a("body").hasClass(c)||(a("."+c).remove(),d3.select("body").append("div").attr("class",c).style("position","absolute").style("z-index","100").style("visibility","hidden").text(""))},b.prototype.update=function(b){for(var c=d3.scale.category20().range(),d=0;
		d<b.length;
		d++)void 0==b[d].color&&(b[d].color=c[d]);
		
		var e=this.settings.tooltip,f="."+this.settings.tooltipClass,g=this.arc,h=this.svg.select(".slices").selectAll("path.slice").data(this.pie(b));
		
		h.enter().insert("path").style("fill",function(a){return a.data.color}).attr("title",function(a){return a.data.name+" "+Math.round(a.value)+"%"}).attr("class","slice").on("mouseover",function(b){e&&"none"!=b.id&&(a(f).html(b.data.name+" "+Math.round(b.value)+"%"),a(f).css("visibility","visible"))}).on("mousemove",function(b){e&&"none"!=b.id&&a(f).css("top",d3.event.pageY-10+"px").css("left",d3.event.pageX+10+"px")}).on("mouseout",function(){e&&(a(f).html(""),a(f).css("visibility","hidden"))}),h.transition().duration(1e3).style("fill",function(a){return a.data.color}).attr("title",function(a){return a.data.name+" "+Math.round(a.value)+"%"}).attrTween("d",function(a){this._current=this._current||a;
			
			var b=d3.interpolate(this._current,a);
			
			return this._current=b(0),function(a){return g(b(a))}}),h.exit().remove()},a.fn.donutpie=function(c){var d=a(this),e=d.data("donutpie");
			
			if(!e){var f="object"==typeof c&&c;
				e=new b(d,f),d.data("donutpie",e)}"string"==typeof c&&a.fn.donutpie.methods[c]?e[c].apply(e,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?a.error("Method "+c+" does not exist in DonutPie"):e.display.apply(e,c)},a.fn.donutpie.methods={display:1,update:1},a.fn.donutpie.defaults={radius:240,tooltip:!0,tooltipClass:"donut-pie-tooltip-bubble"}}(jQuery);