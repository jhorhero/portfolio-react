import ProjectItem from "./ProjectItem";
import project1 from "../assets/project (1).png"
import project2 from "../assets/project (2).png"
import project3 from "../assets/project (3).png"


const Project = () => {
    return (
        <div className="max-w-[1040px] m-auto md:pl-20 py-16" id="project">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ipsum similique nemo voluptates non adipisci totam consectetur tempore consequatur delectus corrupti repudiandae quis odio hic, quos a illo maiores ex! </p>

            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img={project2} title='Food Appi' />
                <ProjectItem img={project1} title='Bistro Boss' />
                <ProjectItem img={project3} title='SkillFully' />
                <ProjectItem  />
               
            </div>
            
        </div>
    );
};

export default Project;