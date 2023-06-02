"use strict";(self.webpackChunkancientbeast=self.webpackChunkancientbeast||[]).push([[435],{9435:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var r=a(19755),i=a(21094),s=a(83355),n=a(23315),h=a(67790),c=a(18394),o=a(71956),u=a(59050);const f=function(e){e.abilities[5]=[{trigger:"onUnderAttack",require:function(){return!0},activate:function(t){if(void 0===t)return!1;if(!t.damages.shock)return!1;this.end();var a=Math.floor(t.damages.shock/4);t.damages.shock-=a;var r=a-(this.creature.stats.energy-this.creature.energy);return this.creature.recharge(a),this.isUpgraded()&&r>0&&this.creature.heal(r),e.log("%CreatureName"+this.creature.id+"% absorbs "+a+" shock damage into energy"),t}},{trigger:"onQuery",_targetTeam:s.S.Enemy,require:function(){return!!this.testRequirements()&&!!this.atLeastOneTarget(this._getHexes(),{team:this._targetTeam})},query:function(){var t=this,a=this.creature;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:a.id,flipped:a.flipped,hexes:this._getHexes()})},activate:function(t){var a=this;a.end(),e.Phaser.camera.shake(.01,120,!0,e.Phaser.camera.SHAKE_HORIZONTAL,!0);var s=r.extend({poison:0},a.damages1);this.isUpgraded()&&(s.poison=this.damages1.poison);var n=new i.h(a.creature,s,1,[],e),h=t.takeDamage(n);h.damages&&h.damages.total>0&&(this.creature.remainingMove=this.creature.stats.movement,e.log("%CreatureName"+this.creature.id+"%'s movement recharged"),e.activeCreature.queryMove())},_getHexes:function(){return e.grid.getHexMap(this.creature.x-3,this.creature.y-2,0,!1,n.LY)}},{trigger:"onQuery",_targetTeam:s.S.Enemy,require:function(){return!!this.atLeastOneTarget(this._getHexes(),{team:this._targetTeam})&&this.testRequirements()},query:function(){var t=this,a=this.creature;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:a.id,flipped:a.flipped,hexes:this._getHexes()})},activate:function(t){this.end();var a=this.damages,r=this.isUpgraded()?0:1,s=this;t.addEffect(new o.Q(s.title,t,t,"onUnderAttack",{effectFn:function(e,a){a.applyDamage().total>=t.health&&t.hexagons.forEach((function(e){e.destroyTrap()}))}},e));var n=new o.Q(s.title,s.creature,this,"onStepOut",{effectFn:(0,u.IH)((function(r){e.log("%CreatureName"+t.id+"% is injured by "+r.name),t.takeDamage(new i.h(s.creature,a,1,[],e),{isFromTrap:!0}),r.deleteEffect(),t.hexagons.forEach((function(e){return e.destroyTrap()}))}))},e);t.hexagons.forEach((function(e){e.createTrap("poisonous-vine",[n],s.creature.player,{turnLifetime:r,fullTurnLifetime:!0,ownerCreature:s.creature,destroyOnActivate:!0,destroyAnimation:"shrinkDown"})}))},_getHexes:function(){var t=e.grid.hexes[this.creature.y][this.creature.x].adjacentHex(2);return h.kh(t,this.creature.size,e.grid)}},{trigger:"onQuery",_targetTeam:s.S.Both,require:function(){return!!this.testRequirements()&&!!this.atLeastOneTarget(this._getHexes(),{team:this._targetTeam})},query:function(){var t=this;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:this.creature.id,flipped:this.creature.flipped,hexes:this._getHexes()})},activate:function(t){var a=this,n=this;n.end();var h=[];h.push(t);for(var u=r.extend({},n.damages),f=function(){var t=h[g];a.isUpgraded()&&(0,s.H)(a.creature,t,s.S.Ally)&&t.addEffect(new o.Q(a.title,a.creature,t,"onUnderAttack",{effectFn:function(e,a){for(;;){var r=a.applyDamage();if(r.total<=0||a.damages.shock<=0||t.health<=1){a.damages={shock:0};break}if(!(r.total>=t.health))break;a.damages.shock--}},deleteTrigger:"onEndPhase"},e));var r=new i.h(n.creature,u,1,[],e);if(void 0===(u=t.takeDamage(r)).damages)return"break";if(u.kill)return"break";if(u.damages.total<=0)return"break";if(""!==u.damageObj.status)return"break";delete u.damages.total,u=u.damages;var f=n.getTargets(t.adjacentHexes(1,!0));if(0===(f=f.filter((function(e){return void 0!==e.hexesHit&&-1==h.indexOf(e.target)}))).length)return"break";for(var d={size:0,stats:{defense:-99999,shock:-99999}},m=0;m<f.length;m++)if(void 0!==f[m]){var l=f[m].target;l.stats.shock>d.stats.shock&&(l==n.creature&&1==f.length||l!=n.creature)&&(d=l)}if(!(d instanceof c.j))return"break";h.push(d),e.Phaser.camera.shake(.03,220,!0,e.Phaser.camera.SHAKE_HORIZONTAL,!0)},g=0;g<h.length&&"break"!==f();g++);},_getHexes:function(){return e.grid.getHexMap(this.creature.x-3,this.creature.y-2,0,!1,n.LY)}}]}},71956:(e,t,a)=>{a.d(t,{Q:()=>i});var r=a(18394);class i{constructor(e,t,a,r,i,s){this.effectFn=()=>{},this.requireFn=e=>!0,this.alterations={},this.turnLifetime=0,this.deleteTrigger="onStartOfRound",this.stackable=!0,this.specialHint=void 0,this.deleteOnOwnerDeath=!1,this._trap=void 0,this.attacker=void 0,this.id=s.effectId++,this.game=s,this.name=e,this.owner=t,this.target=a,this.trigger=r,this.creationTurn=s.turn;for(const e of Object.keys(i))e in this&&(this[e]=i[e]);s.effects.push(this)}animation(...e){e?this.activate(...e):this.activate()}activate(e){if(!this.requireFn(e))return!1;e instanceof r.j&&e.addEffect(this),this.effectFn(this,e)}deleteEffect(){if("effects"in this.target){const e=this.target.effects.indexOf(this);this.target.effects[e]?this.target.effects.splice(e,1):console.warn("Failed to find effect on target.",this)}const e=this.game.effects.indexOf(this);this.game.effects[e]?this.game.effects.splice(e,1):console.warn("Failed to find effect on game.",this),"updateAlteration"in this.target&&this.target.updateAlteration()}get trap(){return this._trap}set trap(e){this._trap=e}}}}]);