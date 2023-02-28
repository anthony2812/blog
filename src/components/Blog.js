import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const sections = [
  { title: 'Constitución', url: 'https://www.oas.org/dil/esp/constitucion_venezuela.pdf' },
  { title: 'LOTTT', url: 'https://oig.cepal.org/sites/default/files/2012_leyorgtrabajo_ven.pdf' },
  { title: 'Ley del Estatuto de la Función Pública', url: 'http://www.oas.org/juridico/spanish/mesicic2_ven_anexo_30_sp.pdf' },
 
];

const mainFeaturedPost = {
  title: 'El Derecho Colectivo y La Función Pública',
  description:
    "La Administración y Gestión de Talento Humano está regulada por las distintas normativas  que regulan las relaciones laborales entre empleados y empleadores.",
  image: 'http://2.bp.blogspot.com/-K9XW-7iwAng/UEVXnm7E3zI/AAAAAAAAABc/eOlQv7UrhJE/s1600/red+humana.jpg',
  imageText: 'main image description',

};

const generalTitlesPost = [
  {
    title: 'Derechos colectivos',
    

  },
  {
    title: 'La Función Pública',
  },

]

const featuredPosts = [
  {
    title: 'Definición',
    date: 'Nov 12',
    description:
      'Se entiende como aquel que favorece armónicas relaciones colectivas de trabajo, para garantizar a empleadores...',
    content:["Se entiende como aquel que favorece armónicas relaciones colectivas de trabajo, para garantizar a empleadores, trabajadores y trabajadoras el derecho de organización y de negociación colectiva, con expreso reconocimiento del valor normativo de las convenciones colectivas de trabajo, además reconoce el derecho de huelga y el derecho a la solución pacífica de los conflictos, la cual debe ser facilitada y estimulada por las autoridades."],
    type:"text",
    image: 'http://2.bp.blogspot.com/-K9XW-7iwAng/UEVXnm7E3zI/AAAAAAAAABc/eOlQv7UrhJE/s1600/red+humana.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Principios',
    date: 'Nov 11',
    description:
      'Entre los principios del derecho colectivo se incluyen...',
    content:["El trabajo como un derecho y un deber, para lograr condiciones justas y humanas a todos los participantes.",
    "No discriminación por concepto de raza, sexo, edad, credo, religión, doctrina política o condición social. ",
    "Intangibilidad y progresividad de los derechos y beneficios sociales, que estipula un marco jurídico para el contrato individual y el contrato colectivo de trabajo, que define el ámbito de aplicación de los derechos de los trabajadores.",
    "Favorecimiento del trabajador. En caso de dudas se favorecerá al trabajador y se adoptará la norma que más le beneficie.",
    "Primacía de la realidad sobre formas o apariencias, que expresa que en materia laboral, el juez puede ir más allá y buscar la verdad de los hechos ante cualquier duda que exista en el proceso.",
    "Irrenunciabilidad de derechos, en el cual las leyes establecen que en ningún caso serán irrenunciables las normas que favorezcan a los trabajadores."
    ],
    type:"list",  
    image: 'https://www.grupoinnova.org/wp-content/uploads/2022/01/EconomiaCircular.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Tipos',
    date: 'Nov 11',
    description:
      'Entre los principios del derecho colectivo se incluyen...',
    content:[
      {
      title:"DERECHO INDIVIDUAL",
      content:["Se atienden las situaciones de carácter individual.","Participa el trabajador como persona natural","En el contrato de trabajo es donde se establecen las obligaciones entre empleado y empleador."]
    },
    {
      title:"DERECHO COLECTIVO",
      content:["Se atienden las situaciones de carácter general o colectivo.","Las organizaciones de trabajadores (sindicatos) son los principales actores dentro del derecho colectivo.","Se establecen los compromisos sobre las condiciones de trabajo."]
    },
   ],
    type:"table",  
    image: 'https://www.grupoinnova.org/wp-content/uploads/2022/01/EconomiaCircular.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Los Sindicatos',
    date: 'Nov 12',
    description:
      'En líneas generales, los sindicatos pueden ser entendidos como la organización...',
    content:["En líneas generales, los sindicatos pueden ser entendidos como la organización de los trabajadores conformada con el objetivo de proteger, defender y promover los derechos de sus miembros, tanto en los aspectos salariales como en las condiciones de trabajo."],
    type:"text",
    image: 'https://economialaboraluft.files.wordpress.com/2015/07/el-padre-hurtado-con-el-sindicato.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Las Convenciones Colectivas del Trabajo',
    date: 'Nov 12',
    description:
      'Se definen como un acuerdo entre sindicatos, federaciones o confederaciones sindicales de trabajadores...',
    content:["Se definen como un acuerdo entre sindicatos, federaciones o confederaciones sindicales de trabajadores, y empleadores o sindicatos o asociaciones de empleadores, para establecer las condiciones para la prestación del servicio y los derechos y obligaciones de las partes. Su contenido no está limitado por la ley y no puede establecer condiciones menos favorables a las de las convenciones colectivas vigentes, pero puede modificar condiciones existentes si es para consagrar beneficios que en conjunto sean más favorables para los trabajadores. "],
    type:"text",
    image: 'https://3.bp.blogspot.com/-RIHRF9FlJOU/WNmKrbRK1eI/AAAAAAAAACE/DVXAvwVPTkYzoEE2q0v6PqY_TT5oA1myACLcB/s1600/descarga.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'El Conflicto Colectivo del Trabajo',
    date: 'Nov 12',
    description:
      'Los conflictos colectivos surgen cuando se considera que están en riesgo los derechos, intereses y beneficios de los trabajadores...',
    content:["La ley asigna un papel activo a las autoridades del trabajo para prevenir y resolver los conflictos colectivos entre empleadores y trabajadores, y establece mecanismos y procedimientos para ello: la misma negociación colectiva, la conciliación, mediación y arbitraje.El procedimiento conflictivo comienza con la presentación de un pliego de peticiones del sindicato de trabajadores al empleador. La fase de conciliación tiene lugar cuando el empleador es notificado del pliego de peticiones y se constituye una junta de conciliación.  El arbitraje es voluntario. El conflicto se somete a una junta formada por tres miembros: uno, escogido por empleador, otro, escogido por el sindicato y el tercero, escogido mutuo acuerdo. La junta tiene la misma facultad de investigación que un tribunal y sus audiencias son públicas. Sus miembros tienen carácter de árbitros arbitradores y sus decisiones son inapelables, pero pueden ser recurridas por ilegalidad. El laudo arbitral se publica en la Gaceta Oficial y es obligatorio para las partes.La huelga es definida en la ley como la suspensión colectiva de las labores por los trabajadores interesados en un conflicto de trabajo, está permitida en los servicios públicos, cuando su paralización no cause perjuicios irremediables a la población o a las instituciones. Cuando la huelga, por su extensión, duración u otras circunstancias graves, ponga en peligro inmediato la vida o la seguridad de la población o de una parte de ella, el Ejecutivo Nacional puede ordenar la reanudación de las faenas y someter el conflicto a arbitraje."],
    type:"text",
    image: 'https://leglaboral57uc.files.wordpress.com/2017/11/a.png?w=768',
    imageLabel: 'Image Text',
  },
];

const featuredPosts2 = [
  {
    title: 'Definición',
    date: 'Nov 12',
    description:
      'Es toda aquella actividad desarrollada por la Administración Pública, de manera directa o delegada la cual tiene como objetivo realizar los intereses de la población en general...',
    content:["Es toda aquella actividad desarrollada por la Administración Pública, de manera directa o delegada la cual tiene como objetivo realizar los intereses de la población en general.El ejercicio de esta actividad se caracteriza por la aplicación de: La legalidad, honestidad y participación, celeridad, eficiencia y eficacia, la prestación de servicio a los particulares y la rendición de cuentas "],
    type:"text",
    image: 'http://3.bp.blogspot.com/-qO6buo4qmO8/VOSnA41Nn6I/AAAAAAAACSY/DwhHtb2C7W4/s1600/funcion%2Bpublica.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Base Constitucional de la Función Pública en Venezuela',
    date: 'Nov 11',
    description:
      'La Constitución de la República  Bolivariana de Venezuela  en su Título IV establece claramente las bases constitucionales que rigen la función pública y a los empleados públicos...',
    content:["Artículo 141. ° La Administración Pública está al servicio de los ciudadanos y ciudadanas y se fundamenta en los principios de honestidad, participación, celeridad, eficacia, eficiencia, transparencia, rendición de cuentas y responsabilidad en el ejercicio de la función pública, con sometimiento pleno a la ley y al derecho.",
    "Artículo 144. ° La ley establecerá el Estatuto de la función pública mediante normas sobre el ingreso, ascenso, traslado, suspensión y retiro de los funcionarios o funcionarias de la Administración Pública, y proveerá su incorporación a la seguridad social. La ley determinará las funciones y requisitos que deben cumplir los funcionarios públicos y funcionarias públicas para ejercer sus cargos.",
    "Artículo 145. ° Los funcionarios públicos y funcionarias públicas están al servicio del Estado y no de parcialidad alguna. Su nombramiento o remoción no podrán estar determinados por la afiliación u orientación política. Quien esté al servicio de los Municipios, de los Estados, de la República y demás personas jurídicas de derecho público o de derecho privado estatales, no podrá celebrar contrato alguno con ellas, ni por sí ni por interpósita persona, ni en representación de otro u otra, salvo las excepciones que establezca la ley.",
    "Artículo 146. ° Los cargos de los órganos de la Administración Pública son de carrera. Se exceptúan los de elección popular, los de libre nombramiento y remoción, los contratados y contratadas, los obreros y obreras al servicio de la Administración Pública y los demás que determine la Ley. El ingreso de los funcionarios públicos y las funcionarias públicas a los cargos de carrera será por concurso público, fundamentado en principios de honestidad, idoneidad y eficiencia. El ascenso estará sometido a métodos científicos basados en el sistema de méritos, y el traslado, suspensión o retiro será de acuerdo con su desempeño.",
    "Artículo 147. ° Para la ocupación de cargos públicos de carácter remunerado es necesario que sus respectivos emolumentos estén previstos en el presupuesto correspondiente. Las escalas de salarios en la Administración Pública se establecerán reglamentariamente conforme a la ley. La ley orgánica podrá establecer límites razonables a los emolumentos que devenguen los funcionarios públicos y funcionarias públicas municipales, estadales y nacionales. La ley nacional establecerá el régimen de las jubilaciones y pensiones de los funcionarios públicos y funcionarias públicas nacionales, estadales y municipales.",
    "Artículo 148. ° Nadie podrá desempeñar a la vez más de un destino público remunerado, a menos que se trate de cargos académicos, accidentales, asistenciales o docentes que determine la ley. La aceptación de un segundo destino que no sea de los exceptuados en este artículo, implica la renuncia del primero, salvo cuando se trate de suplentes, mientras no reemplacen definitivamente al principal. Nadie podrá disfrutar más de una jubilación o pensión, salvo los casos expresamente determinados en la ley.",
    "Artículo 149. ° Los funcionarios públicos y funcionarias públicas no podrán aceptar cargos, honores o recompensas de gobiernos extranjeros sin la autorización de la Asamblea Nacional."
    ],
    type:"list",  
    image: 'https://az.genial.ly/users/5aca857c37bcdd0fed7cd024/5aca8ab22fc1330d9b657a44/5aca8ab22fc1330d9b657a45/3fc9a638-25ef-438b-9b7e-941ea5ec4a7e.jpg',
    imageLabel: 'Image Text',
  },
 
 
  {
    title: 'Ley del Estatuto de la Función Pública (Parte 1)',
    date: 'Nov 11',
    description:
      'Es el instrumento normativo que regula las relaciones de empleo público entre los funcionarios públicos y su ámbito de aplicación comprende las administraciones públicas nacionales, estadales y municipales. Sin embargo, en Artículo 1 se establecen las excepciones para su aplicabilidad: Parágrafo Único: Quedarán excluidos de la aplicación de esta Ley:...',
    content:["Los funcionarios y funcionarias públicos al servicio del Poder Legislativo Nacional;",
    "Los funcionarios y funcionarias públicos a que se refiere la Ley del Servicio Exterior; ",
    "Los funcionarios y funcionarias públicos al servicio del Poder Judicial; ",
    "Los funcionarios y funcionarias públicos al servicio del Poder Ciudadano; ",
    "Los funcionarios y funcionarias públicos al servicio del Poder Electoral; ",
    "Los obreros y obreras al servicio de la Administración Pública; ",
    "Los funcionarios y funcionarias públicos al servicio de la Procuraduría General de la República;  ",
    "Los funcionarios y funcionarias públicos al servicio del Servicio Nacional Integrado de Administración Aduanera y Tributaria (SENIAT); ",
    "Los miembros del personal directivo, académico, docente, administrativo y de investigación de las universidades nacionales."
  ],
    type:"list",  
    image: 'https://www.libreriaeuropa.com.ve/libreria_media/producto/660444/0000660444.jpg',
    imageLabel: 'Image Text',
  },

  {
    title: 'Ley del Estatuto de la Función Pública (Parte 2)',
    date: 'Nov 11',
    description:
      'El ingreso para el ejercicio de la función pública, se hace mediante concurso de ingreso, donde las oficinas de talento humano son las encargadas de coordinar el proceso de selección de personal con base en las aptitudes, actitudes y competencias, permitiendo la participación, en igualdad de condiciones, de quienes posean los requisitos exigidos para desempeñar los cargos, sin discriminaciones de ninguna índole. Todo ello, de conformidad con lo establecido en el TÍTULO V: SISTEMA DE ADMINISTRACIÓN DE PERSONAL, de la misma ley. Considerando la importancia y la representatividad del ejercicio de la función pública, en el TÍTULO III: FUNCIONARIOS Y FUNCIONARIAS PÚBLICOS, se contemplan los derechos y deberes de los funcionarios públicos, entre los cuales se pueden indicar: ...',
    content:["Derecho de incorporarse al cargo, percibir una remuneración mensual y una bonificación de fin de año.",
    "Derecho al descanso vacacional. ",
    "Derecho a su protección integral a través del sistema de seguridad social.",
    "Derecho a la protección integral de la maternidad.",
    
  ],
    type:"list",  
    image: 'https://www.libreriaeuropa.com.ve/libreria_media/producto/660444/0000660444.jpg',
    imageLabel: 'Image Text',
  },

  {
    title: 'Ley del Estatuto de la Función Pública (Parte 3)',
    date: 'Nov 11',
    description:
      'En cuanto a los deberes de los funcionarios, el Artículo 33, señala: Además de los deberes que impongan las leyes y los reglamentos, los funcionarios o funcionarias públicos estarán obligados a: ...',
    content:["Prestar sus servicios personalmente con la eficiencia requerida. ",
    "Acatar las órdenes e instrucciones emanadas de los superiores jerárquicos. ",
    "Cumplir con el horario de trabajo establecido. ",
    "Prestar la información necesaria a los particulares en los asuntos y expedientes en que éstos tengan algún interés legítimo.",
    "Guardar en todo momento una conducta decorosa y observar en sus relaciones con sus superiores, subordinados y con el público toda la consideración y cortesía debidas. ",
    "Guardar la reserva, discreción y secreto que requieran los asuntos relacionados con las funciones que tengan atribuidas, dejando a salvo lo previsto en el numeral 4 de este artículo. ",
    "Vigilar, conservar y salvaguardar los documentos y bienes de la Administración Pública confiados a su guarda, uso o administración. ",
    "Cumplir las actividades de capacitación y perfeccionamiento destinados a mejorar su desempeño. ",
    "Poner en conocimiento de sus superiores las iniciativas que estimen útiles para la conservación del patrimonio nacional, el mejoramiento de los servicios y cualesquiera otras que incidan favorablemente en las actividades a cargo del órgano o ente. ",
    "inhibirse del conocimiento de los asuntos cuya competencia esté legalmente atribuida, en los siguientes casos: a. Cuando personalmente, o bien su cónyuge, su concubino o concubina o algún pariente dentro del cuarto grado de consanguinidad o segundo de afinidad, tuvieren interés en un asunto. b. Cuando tuvieren amistad o enemistad manifiesta con cualquiera de las personas interesadas que intervengan en un asunto. c. Cuando hubieren intervenido como testigos o peritos en el expediente de cuya resolución se trate, o como funcionarios o funcionarias públicos hubieren manifestado previamente su opinión en el mismo, de modo que pudieran prejuzgar la resolución del asunto; o tratándose de un recurso administrativo, que hubieren resuelto o intervenid en la decisión del acto que se impugna. Cuando tuvieren relación de subordinación con funcionarios o funcionarias públicos directamente interesados en el asunto. El funcionario o funcionaria público de mayor jerarquía en la entidad donde curse un asunto podrá ordenar, de oficio o a instancia de los interesados, a los funcionarios o funcionarias públicos incursos en las causales señaladas en este artículo que se abstengan de toda intervención en el procedimiento, designando en el mismo acto al funcionario o funcionaria que deba continuar conociendo del expediente. ",
    " Cumplir y hacer cumplir la Constitución de la República Bolivariana de Venezuela, las leyes, los reglamentos, los instructivos y las órdenes que deban ejecutar"
  
  ],
    type:"list",  
    image: 'https://www.libreriaeuropa.com.ve/libreria_media/producto/660444/0000660444.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Ley del Estatuto de la Función Pública (Final)',
    date: 'Nov 11',
    description:
      'El retiro de la función pública, está establecido en el Artículo 78 de la LEFP: El retiro de la Administración Pública procederá en los siguientes casos:...',
    content:["Por renuncia escrita del funcionario o funcionaria público debidamente aceptada. ",
    "Por pérdida de la nacionalidad. ",
    "Por interdicción civil. ",
    "Por jubilación y por invalidez de conformidad con la ley. ",
    "Por reducción de personal debido a limitaciones financieras, cambios en la organización administrativa, razones técnicas o la supresión de una dirección, división o unidad administrativa del órgano o ente. La reducción de personal será autorizada por el Presidente o Presidenta de la República en Consejo de Ministros, por los consejos legislativos en los estados, o por los concejos municipales en los municipios. ",
    "Por estar incurso en causal de destitución. ",
    "Por cualquier otra causa prevista en la presente Ley. Los cargos que quedaren vacantes conforme al numeral 5 de este artículo no podrán ser provistos durante el resto del ejercicio fiscal. Los funcionarios o funcionarias públicos de carrera que sean objeto de alguna medida de reducción de personal, conforme al numeral 5 de este artículo, antes de ser retirados podrán ser reubicados. A tal fin, gozarán de un mes de disponibilidad a los efectos de su reubicación. En caso de no ser ésta posible, el funcionario o funcionaria público será retirado e incorporado al registro de elegibles."
  
  ],
    type:"list",  
    image: 'https://www.libreriaeuropa.com.ve/libreria_media/producto/660444/0000660444.jpg',
    imageLabel: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="EL DERECHO COLECTIVO Y  LA FUNCIÓN PÚBLICA" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />

          <Grid container >
            {
              
                <Grid container spacing={5} sx={{ mt: 3 }}>
                  <Main title={generalTitlesPost[0].title} posts={[]} />
                  {featuredPosts.map((post) => (
                    <FeaturedPost key={post.title} post={post} />
                  ))}
                </Grid>

                
              
            }
{
              
              <Grid container spacing={5} sx={{ mt: 3 }}>
                <Main title={generalTitlesPost[1].title} posts={[]} />
                {featuredPosts2.map((post) => (
                  <FeaturedPost key={post.title} post={post} />
                ))}
              </Grid>

              
            
          }
          </Grid>
          
        </main>
      </Container>
      <Footer
        title="Alumnos"
        description="Noelia García && Jonathan Tabares"
      />
    </ThemeProvider>
  );
}