define(["require", "exports", "module", "app", "skateboard", "jquery", "riot", "./overall-engagement-by-area-tag"],
function(e, a, t) { (function() {
        var a, n, o, i, r, s, l = function(e, a) {
            function t() {
                this.constructor = e
            }
            for (var n in a) c.call(a, n) && (e[n] = a[n]);
            return t.prototype = a.prototype,
            e.prototype = new t,
            e.__super__ = a.prototype,
            e
        },
        c = {}.hasOwnProperty;
        i = e("app"),
        o = e("skateboard"),
        a = e("jquery"),
        s = e("riot"),
        r = e("./overall-engagement-by-area-tag"),
        n = function(e) {
            function a() {
                return a.__super__.constructor.apply(this, arguments)
            }
            return l(a, e),
            a.prototype.render = function() {
                return a.__super__.render.apply(this, arguments),
                s.mount(this.$(".sb-mod__body")[0], r, {
                    typeNo: parseInt(this._args[1])
                })
            },
            a
        } (o.BaseMod),
        t.exports = n
    }).call(this)
}),
define("./overall-engagement-by-area-tag", ["require", "exports", "module", "riot", "app", "skateboard", "riot-mixins", "highcharts"],
function(e, a, t) {
    riot = e("riot"),
    riot.tag("overall-engagement-by-area-tag", '<div class="body-inner"> <div class="nav-bar-left"> <h2>Engagement Report</h2> <h3>Overall Engagement by Area</h3> </div> </div> <div class="category"> <span class="icon icon-arrow-left-alt" onclick="{prevType}"></span> <span class="name">{types[typeNo]}</span> <span class="icon icon-arrow-right-alt" onclick="{nextType}"></span> </div> <div class="items"> <div class="bee-cell type-{i + 1} small {outline: !itemOns[i]}" data-index="{i}" onclick="{toggleItem}" each="{item, i in items[typeNo]}"> <div class="top"></div> <div class="mid"></div> <div class="bot"></div> <div class="content"> <div class="inner"> {item.name} </div> </div> </div> </div> <div class="show-no"> <label class="checkbox {on: showNo}" onclick="{toggleShowNo}"><span class="icon">&nbsp;</span><span>Show No.</span></label> </div> <div class="chart"> <div id="overall-engagement-by-area-chart-0" style="height: 160px;"></div> <div class="title">Total Click</div> </div> <div class="chart"> <div id="overall-engagement-by-area-chart-1" style="height: 160px;"></div> <div class="title">Unique Click</div> </div> <div class="chart"> <div id="overall-engagement-by-area-chart-2" style="height: 160px;"></div> <div class="title">Stay Length</div> </div>', ".body-sb-mod--campaign-overall-engagement-by-area .campaign-menu { -webkit-transform: translateY(0); transform: translateY(0); } .sb-mod.sb-mod--campaign-overall-engagement-by-area { padding-bottom: 60px; } .sb-mod.sb-mod--campaign-overall-engagement-by-area .category { text-align: center; margin-top: 20px; position:absolute; right:20px; line-height: 30px; } .sb-mod.sb-mod--campaign-overall-engagement-by-area .category .name { display: inline-block; width: 60px; text-align: center; } .sb-mod.sb-mod--campaign-overall-engagement-by-area .items { text-align: center; margin-top: 20px; } .sb-mod.sb-mod--campaign-overall-engagement-by-area .items .bee-cell { margin: 0 5px; word-break: break-all; } .sb-mod.sb-mod--campaign-overall-engagement-by-area .items .bee-cell.small .content .inner { padding: 5px; } .sb-mod.sb-mod--campaign-overall-engagement-by-area .show-no { text-align: right; padding: 10px; } .sb-mod.sb-mod--campaign-overall-engagement-by-area .chart { margin-top: 10px; } .sb-mod.sb-mod--campaign-overall-engagement-by-area .chart .title { text-align: center; color: #fff; }",
    function(a) {
        var t, n, o, i;
        n = e("app"),
        i = e("skateboard"),
        o = e("riot-mixins"),
        t = e("highcharts"),
        this.mixin(o.navBar),
        this.showNo = !1,
        this.types = ["Event", "Store", "City", "Country"],
        this.typeNo = a.typeNo || 0,
        this.itemOns = [!0, !0, !0, !0, !0],
        this.items = [[{
            name: "Kerry Centre"
        },
        {
            name: "iapm"
        },
        {
            name: "IFC"
        },
        {
            name: "Plaza 66"
        },
        {
            name: "Others"
        }], [{
            name: "Kerry Centre"
        },
        {
            name: "iapm"
        },
        {
            name: "IFC"
        },
        {
            name: "Plaza 66"
        },
        {
            name: "Others"
        }], [{
            name: "Beijing"
        },
        {
            name: "Shanghai"
        },
        {
            name: "Shenzhen"
        },
        {
            name: "Guangzhou"
        },
        {
            name: "Others"
        }], [{
            name: "China"
        },
        {
            name: "Korea"
        },
        {
            name: "Japan"
        },
        {
            name: "Hongkong"
        },
        {
            name: "Others"
        }]],
        this.prevType = function() {
            return this.typeNo--,
            this.typeNo < 0 ? this.typeNo += this.types.length: void 0
        },
        this.nextType = function() {
            return this.typeNo = (this.typeNo + 1) % this.types.length
        },
        this.toggleItem = function(e) {
            var a, t;
            return t = $(e.currentTarget),
            a = t.data("index"),
            this.itemOns[a] = !this.itemOns[a]
        },
        this.toggleShowNo = function(e) {
            return this.showNo = !this.showNo
        },
        this.on("mount update",
        function() {
            var e, a, t, n, o, i, r, s, l, c, p;
            for (a = [[[{
                y: 40,
                color: "#443714"
            },
            {
                y: 25,
                color: "#90c122"
            },
            {
                y: 20,
                color: "#f78619"
            },
            {
                y: 10,
                color: "#815911"
            },
            {
                y: 5,
                color: "#7c9440"
            }], [{
                y: 60,
                color: "#443714"
            },
            {
                y: 5,
                color: "#90c122"
            },
            {
                y: 20,
                color: "#f78619"
            },
            {
                y: 10,
                color: "#815911"
            },
            {
                y: 5,
                color: "#7c9440"
            }], [{
                y: 20,
                color: "#443714"
            },
            {
                y: 25,
                color: "#90c122"
            },
            {
                y: 30,
                color: "#f78619"
            },
            {
                y: 20,
                color: "#815911"
            },
            {
                y: 5,
                color: "#7c9440"
            }]]], a[1] = a[2] = a[3] = a[0], e = [[], [], []], l = this.itemOns, t = o = 0, r = l.length; r > o; t = ++o) n = l[t],
            n && (e[0].push(a[this.typeNo][0][t]), e[1].push(a[this.typeNo][1][t]), e[2].push(a[this.typeNo][2][t]));
            for (c = [0, 1, 2], p = [], i = 0, s = c.length; s > i; i++) t = c[i],
            p.push($("#overall-engagement-by-area-chart-" + t).highcharts({
                credits: {
                    enabled: !1
                },
                colors: ["#443714", "#90c122", "#f78619", "#815911", "#7c9440"],
                chart: {
                    backgroundColor: null
                },
                title: {
                    text: null,
                    verticalAlign: "bottom",
                    style: {
                        color: "#fff",
                        fontSize: "0.9rem"
                    }
                },
                tooltip: {
                    enabled: !1
                },
                legend: {
                    labelFormat: this.showNo ? "{y}": "{percentage:.1f}%",
                    layout: "vertical",
                    align: "right",
                    verticalAlign: "middle"
                },
                plotOptions: {
                    pie: {
                        borderWidth: 0,
                        allowPointSelect: !1,
                        cursor: "pointer",
                        showInLegend: !0,
                        dataLabels: {
                            enabled: !1,
                            color: "#000000",
                            connectorColor: "#000000",
                            format: this.showNo ? "{point.y}": "{point.percentage:.1f}%"
                        }
                    }
                },
                series: [{
                    type: "pie",
                    name: "Browser share",
                    data: e[t]
                }]
            }));
            return p
        })
    }),
    t.exports = "overall-engagement-by-area-tag"
});