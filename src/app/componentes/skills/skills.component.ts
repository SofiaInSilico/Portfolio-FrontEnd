import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SkillsService } from 'src/app/servicios/skills.service';
import { Skills } from './skills';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

skill: Skills = new Skills();
skills: Skills[] = [];
displayForm: boolean = false;
displayUpdateForm: boolean = false;
displayDeleteForm:boolean = false;
postId: any;


constructor(private skillService:SkillsService, private router:Router, private activatedRoute:ActivatedRoute, private http: HttpClient, public autenticaticionService: AutenticacionService) { }

createSkill():void {
this.skillService.create(this.skill).subscribe(
data => {
this.skills.push(data);
this.skill = new Skills();
this.displayForm = false;
this.router.navigate(['porfolio'])
}
);
location.reload();
}

cargar(skill: Skills):void{
    var skillToUpdate=skill;
    this.skillService.update(skill.id,skill.nombreSkill,skill.descripcionSkill,skill.urlSkill, skillToUpdate).subscribe(
        data => this.postId = data.id)
    this.displayUpdateForm = false;
}

deleteSkill(skill: Skills):void {
this.skillService.delete(skill.id).subscribe(
data => {
this.skills = this.skills.filter(e => e !== skill);
this.displayDeleteForm = false;
}
);
location.reload();
}


ngOnInit(): void {
this.skillService.getAll().subscribe(
data => {
this.skills = data;
}
);
}
}
