"use strict";(self.webpackChunkancientbeast=self.webpackChunkancientbeast||[]).push([[67],{37067:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var i=a(16255),r=a(83355),s=a(23315),n=(a(18394),a(68861));const h=function(e){e.abilities[33]=[{trigger:"onDamage onStartPhase",_damaged:!1,_targets:[],require:function(){return e.activeCreature!=this.creature?(this._damaged=!0,!1):!!this._damaged&&(this._damaged=!1,this._targets=this.creature.adjacentHexes(1),!(this.isUpgraded()&&!this.atLeastOneTarget(this._targets,{team:r.S.Enemy}))&&this.testRequirements())},activate:function(){var t=this.creature,a=new i.h(t,{sonic:30},this._targets.length,[],e),r=new Set;e.Phaser.camera.shake(.02,300,!0,e.Phaser.camera.SHAKE_HORIZONTAL,!0),this._targets.forEach((function(e){void 0===e.creature||r.has(e.creature)||r.add(e.creature)})),this.end(!1,!0),r.forEach((function(e,t,i){e.takeDamage(a)})),this.end(!0,!1)}},{trigger:"onQuery",_executeHealthThreshold:45,_targetTeam:r.S.Enemy,require:function(){return!!this.testRequirements()&&!!this.atLeastOneTarget(this._getHexes(),{team:this._targetTeam})},query:function(){var e=this.creature,t=this;this.game.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:e.id,flipped:e.flipped,hexes:this._getHexes()})},activate:function(t){if(this.end(),e.Phaser.camera.shake(.02,200,!0,e.Phaser.camera.SHAKE_BOTH,!0),t.health<=this._executeHealthThreshold){var a=new i.h(this.creature,{pure:t.health},1,[],this.game);this.game.UI.chat.suppressMessage(/is dead/i,1),t.takeDamage(a).kill&&(this.game.log("%CreatureName".concat(t.id,"% has been executed!")),t.hint("Executed","damage"),this.isUpgraded()&&(this.setUsed(!1),this.game.UI.selectAbility(-1)))}else{var r=new i.h(this.creature,{slash:30},1,[],this.game);t.takeDamage(r)}},_getHexes:function(){return this.creature.getHexMap(s.LY)}},{trigger:"onQuery",require:function(){return!(!this.testRequirements()||!this.creature.stats.moveable&&(this.message=e.msg.abilities.notMoveable,1))},query:function(){var e=this,t=this.creature,a=this.game.grid.getFlyingRange(t.x,t.y,10,t.size,t.id);this.game.grid.queryHexes({fnOnSelect:function(){e._highlightDestination.apply(e,arguments)},fnOnConfirm:function(){e.animation.apply(e,arguments)},size:t.size,flipped:t.player.flipped,id:t.id,hexes:a})},activate:function(t){var a=this;a.end(),a.creature.moveTo(t,{ignoreMovementPoint:!0,ignorePath:!0,callback:function(){e.activeCreature.queryMove(),e.Phaser.camera.shake(.04,100,!0,e.Phaser.camera.SHAKE_VERTICAL,!0),a.isUpgraded()&&a._addOffenseBuff()}})},_highlightDestination:function(e){this.creature.tracePosition({x:e.x,y:e.y,overlayClass:"creature moveto selected player"+this.creature.team})},_addOffenseBuff:function(){this.creature;var e=this,t=new n.Q("Momentum",e.creature,e.creature,"",{effectFn:function(e){e.deleteEffect()},alterations:{offense:25},deleteTrigger:"onStartPhase",turnLifetime:1},this.game);e.creature.addEffect(t)}},{trigger:"onQuery",_targetTeam:r.S.Ally,_maxTransferAmount:50,require:function(){return!!this.testRequirements()&&(this.creature.health<this._maxTransferAmount+1?(this.message="Not enough health",!1):!!this.atLeastOneTarget(this._getHexes(),{team:this._targetTeam,optTest:this._confirmTarget}))},query:function(){var t=this,a=this.creature;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},optTest:this._confirmTarget,team:this._targetTeam,id:a.id,flipped:a.flipped,hexes:this._getHexes()})},activate:function(t){this.end();var a=Math.min(t.stats.health-t.health,this._maxTransferAmount);if(t.heal(a,!1,!1),this.creature.heal(-a,!1,!1),this.game.log("%CreatureName".concat(this.creature.id,"% gives ").concat(a," health to %CreatureName").concat(t.id,"%")),this.isUpgraded()){var i=new n.Q(this.title,this.creature,this.creature,"",{alterations:{regrowth:10}},e);this.creature.addEffect(i,"%CreatureName".concat(this.creature.id,"% gains 10 regrowth points"),"",!1,!0)}},_getHexes:function(){return this.creature.adjacentHexes(1)},_confirmTarget:function(e){return e.health<e.stats.health}}]}},68861:(e,t,a)=>{a.d(t,{Q:()=>h});var i=a(15671),r=a(43144),s=a(19755),n=a(18394),h=function(){function e(t,a,r,n,h,c){(0,i.Z)(this,e),this.id=c.effectId++,this.game=c,this.name=t,this.owner=a,this.target=r,this.trigger=n,this.creationTurn=c.turn;var u=s.extend({requireFn:function(){return!0},effectFn:function(){},alterations:{},turnLifetime:0,deleteTrigger:"onStartOfRound",stackable:!0,noLog:!1,specialHint:void 0,deleteOnOwnerDeath:!1},h);s.extend(this,u),c.effects.push(this)}return(0,r.Z)(e,[{key:"animation",value:function(){this.activate.apply(this,arguments)}},{key:"activate",value:function(e){if(!this.requireFn(e))return!1;this.noLog||console.log("Effect "+this.name+" triggered"),e instanceof n.j&&e.addEffect(this),this.effectFn(this,e)}},{key:"deleteEffect",value:function(){var e=this.target.effects.indexOf(this);this.target.effects[e]?this.target.effects.splice(e,1):console.warn("Failed to find effect on target.",this);var t=this.game.effects.indexOf(this);this.game.effects[t]?this.game.effects.splice(t,1):console.warn("Failed to find effect on game.",this),this.target.updateAlteration()}}]),e}()}}]);