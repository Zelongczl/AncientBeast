(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{308:function(e,t,a){"use strict";a.r(t);var r=a(113),i=a(27),n=a(11),c=a(5),u=a(306);t.default=function(e){e.abilities[22]=[{trigger:"onDamage",require:function(e){return!this.used&&(!!this.testRequirements()&&(null==e&&(e={type:"target"}),!0))},activate:function(e){if(this.triggeredThisChain)return e;var t=this.getTargets(this.creature.adjacentHexes(1));return this.end(),this.triggeredThisChain=!0,this.areaDamage(this.creature,this.damages,[],t),e}},{trigger:"onQuery",distance:2,_targetTeam:i.a.enemy,require:function(){return!!this.testRequirements()&&!!this.testDirection({team:this._targetTeam,distance:this.distance,sourceCreature:this.creature})},query:function(){var t=this,a=this.creature;e.grid.queryDirection({fnOnConfirm:function(){t.animation.apply(t,arguments)},flipped:a.player.flipped,team:this._targetTeam,id:this.creature.id,requireCreature:!0,x:a.x,y:a.y,distance:this.distance,sourceCreature:a})},activate:function(t){this.end();var a=n.d(t).creature,i=new r.a(this.creature,this.damages,1,[],e);a.takeDamage(i)}},{trigger:"onQuery",_targetTeam:i.a.enemy,require:function(){return this.testRequirements()},query:function(){var t=this,a=this.creature;a.queryMove({noPath:!0,isAbility:!0,range:e.grid.getFlyingRange(a.x,a.y,50,a.size,a.id),callback:function(){delete arguments[1],t.animation.apply(t,arguments)}})},activate:function(t){var a=this;a.end(),a.getTargets(a.creature.adjacentHexes(1)).forEach((function(t){if(t.target instanceof c.a){var r=t.target;if(Object(i.b)(a.creature,r,t._targetTeam)){var n=new u.a("Roasted",a.creature,r,"",{alterations:{burn:-1}},e);r.addEffect(n)}}})),a.creature.moveTo(t,{ignoreMovementPoint:!0,ignorePath:!0,animation:"teleport",callback:function(){e.activeCreature.queryMove()},callbackStepIn:function(){a.getTargets(a.creature.adjacentHexes(1)).forEach((function(t){if(t.target instanceof c.a){var r=t.target;if(Object(i.b)(a.creature,r,t._targetTeam)){var n=new u.a("Roasted",a.creature,r,"",{alterations:{burn:-1}},e);r.addEffect(n,"%CreatureName"+r.id+"% got roasted : -1 burn stat debuff")}}}))}})}},{trigger:"onQuery",require:function(){return this.testRequirements()},query:function(){var t=this,a=this.creature,r=a.hexagons[1].adjacentHex(3),i=r.indexOf(a.hexagons[0]),n=r.indexOf(a.hexagons[2]);r.splice(i,1),r.splice(n,1),e.grid.queryHexes({fnOnConfirm:function(){t.animation.apply(t,arguments)},fnOnSelect:function(t){t.adjacentHex(1).forEach((function(t){t.creature instanceof c.a?t.creature==a?a.adjacentHexes(1).forEach((function(t){t.creature instanceof c.a?t.creature==a?(a.adjacentHexes(1).overlayVisualState("creature selected weakDmg player"+t.creature.team),t.overlayVisualState("creature selected weakDmg player"+t.creature.team)):t.overlayVisualState("creature selected weakDmg player"+t.creature.team):t.overlayVisualState("creature selected weakDmg player"+e.activeCreature.team)})):t.overlayVisualState("creature selected weakDmg player"+t.creature.team):t.overlayVisualState("creature selected weakDmg player"+e.activeCreature.team)})),t.cleanOverlayVisualState(),t.creature instanceof c.a?t.overlayVisualState("creature selected player"+t.creature.team):t.overlayVisualState("creature selected player"+e.activeCreature.team)},id:this.creature.id,hexes:r,hideNonTarget:!0})},activate:function(t){this.end();var a=t.adjacentHex(1),i=this.getTargets(a);t.creature instanceof c.a&&t.creature.takeDamage(new r.a(this.creature,this.damages1,1,[],e)),this.areaDamage(this.creature,this.damages2,[],i)}}]}}}]);