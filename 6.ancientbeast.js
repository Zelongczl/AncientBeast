(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{311:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a(113),s=a(27),n=a(11),u=a(5);t.default=function(e){e.abilities[0]=[{trigger:"onUnderAttack",require:function(){return this.creature.protectedFromFatigue=this.testRequirements(),this.creature.protectedFromFatigue},activate:function(t){if(e.activeCreature.id==this.creature.id)return t;if(this.isUpgraded()&&t.melee&&!t.counter){var a=new i.a(this.creature,{pure:9},1,[],e);a.counter=!0,e.activeCreature.takeDamage(a)}return this.creature.player.plasma-=1,this.creature.protectedFromFatigue=this.testRequirements(),t.damages={total:0},t.status="Shielded",t.effect=[],t.noLog=!0,this.end(!0),e.log("%CreatureName"+this.creature.id+"% is protected by Plasma Field"),t}},{trigger:"onQuery",_targetTeam:s.a.enemy,require:function(){return!!this.testRequirements()&&!!this.atLeastOneTarget(this.creature.adjacentHexes(this.isUpgraded()?4:1),{team:this._targetTeam})},query:function(){var t=this,a=this.creature;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:a.id,flipped:a.player.flipped,hexes:a.adjacentHexes(this.isUpgraded()?4:1)})},activate:function(t){this.end();var a={shock:12*t.size},r=new i.a(this.creature,a,1,[],e);t.takeDamage(r)}},{trigger:"onQuery",_targetTeam:s.a.enemy,require:function(){if(!this.testRequirements())return!1;var t=this.creature.adjacentHexes(2);if(!this.atLeastOneTarget(t,{team:this._targetTeam}))return!1;var a=99;return this.getTargets(t).forEach((function(e){e.target instanceof u.a&&a>e.target.size&&(a=e.target.size)})),!(this.creature.player.plasma<a)||(this.message=e.msg.abilities.noPlasma,!1)},query:function(){var t=this,a=this.creature;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},optTest:function(e){return e.size<=a.player.plasma},team:this._targetTeam,id:a.id,flipped:a.player.flipped,hexes:a.adjacentHexes(2)})},activate:function(t){this.end();var a=t.size,r=t.baseStats.health-t.health;this.isUpgraded()&&r<40&&(r=40),this.creature.player.plasma-=a,r=new i.a(this.creature,{pure:r},1,[],e),this.end(),t.takeDamage(r)}},{trigger:"onQuery",require:function(){return!!this.testRequirements()&&(this.creature.player.plasma<=1?(this.message=e.msg.abilities.noPlasma,!1):this.creature.player.getNbrOfCreatures()!=e.creaLimitNbr||(this.message=e.msg.abilities.noPsy,!1))},summonRange:4,query:function(){this.isUpgraded()&&(this.summonRange=6),e.UI.materializeToggled=!0,e.UI.toggleDash("randomize")},fnOnSelect:function(t,a){var r=e.retrieveCreatureStats(a.creature);e.grid.previewCreature(t.pos,r,this.creature.player)},materialize:function(t){var a=e.retrieveCreatureStats(t),i=this,s=this.creature;e.queue.removeTempCreature(),a=r.extend(a,{x:3,y:3},{team:this.creature.player.id},{temp:!0});var c=new u.a(a,e);c.cleanHex(),c.sprite.alpha=0,e.queue.tempCreature=c,e.queue.addByInitiative(c),e.updateQueueDisplay(),r("div[creatureid='"+c.id+"']").css({opacity:.5}),e.grid.forEachHex((function(e){e.unsetReachable()}));var o=s.hexagons[0].adjacentHex(this.summonRange);o.forEach((function(e){e.setReachable()})),o=o.filter((function(e){return e.isWalkable(a.size,0,!1)})),o=n.a(o,a.size,e.grid),e.grid.queryHexes({fnOnSelect:function(){i.fnOnSelect.apply(i,arguments)},fnOnCancel:function(){e.activeCreature.queryMove()},fnOnConfirm:function(){i.animation.apply(i,arguments)},args:{creature:t,cost:a.size-0+(a.level-0)},size:a.size,flipped:s.player.flipped,hexes:o})},activate:function(t,a){var r=a.creature,i={x:t.x,y:t.y};this.creature.player.plasma-=a.cost,this.end(!1,!0),this.creature.player.summon(r,i);var s=e.creatures.pop();s.id--,e.creatures[s.id]=s,e.creatureIdCounter--,this.creature.queryMove()}}]}}}]);