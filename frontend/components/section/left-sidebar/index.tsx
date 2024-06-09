import Link from "next/link";
import styles from "./index.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import OutboundOutlinedIcon from "@mui/icons-material/OutboundOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function LeftSidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <Link href="/">
            <li>
              <HomeOutlinedIcon />
              Home
            </li>
          </Link>
          <Link href="/topic/popular">
            <li>
              <OutboundOutlinedIcon /> Popular
            </li>
          </Link>
          <hr />
        </ul>
        <ul>
          <div>Topics</div>
          <Link href="/topic/create">
            <li>
              <AddOutlinedIcon />
              Create Topic
            </li>
          </Link>
        </ul>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            더보기
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <Link href="/topic/1">
                <li>Topic 1</li>
              </Link>
              <Link href="/topic/2">
                <li>Topic 2</li>
              </Link>
              <Link href="/topic/3">
                <li>Topic 3</li>
              </Link>
            </ul>
          </AccordionDetails>
        </Accordion>
      </nav>
      <hr />
      <nav>
        <ul>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <div className={styles.scrollbox}>
        <div className={styles.scrollbox_inner}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, at aperiam molestias sequi, mollitia accusantium non
            vero vitae eum perspiciatis commodi magnam illum quidem est
            laboriosam sunt quae voluptatem distinctio. Iste officia quae quas
            voluptatem? Doloremque eius accusamus soluta, tempore consectetur
            voluptates fugit consequatur veritatis vitae ratione minima
            similique aspernatur deserunt vel eos? Deleniti, officiis quaerat
            tenetur quam fugiat repellat. Repudiandae quaerat quos, eum ex nemo
            deserunt delectus aliquid perspiciatis, deleniti aperiam repellat
            sed illum. Ducimus, quidem. Accusantium minus libero quae magnam
            expedita, laudantium cumque mollitia earum commodi, vitae facere.
            Sed nisi soluta, excepturi dicta velit quisquam quod amet, natus
            eligendi qui tempore eveniet atque sunt nihil recusandae incidunt
            provident dolorum perferendis perspiciatis earum voluptatibus
            consequuntur repudiandae enim nobis. Iusto? Illum iste maxime
            reiciendis possimus ullam facere sapiente quam hic aperiam
            laudantium distinctio est dolorum iure sint accusantium laborum odio
            cupiditate autem sunt rem, harum vero. Assumenda sed expedita
            cupiditate? Neque nihil optio, consequatur cum maxime ipsam odit
            quidem aspernatur officiis asperiores quaerat ipsa, doloribus eum
            voluptatibus rem saepe. Labore ratione accusantium quisquam
            reprehenderit porro esse officiis ipsa velit expedita. Laudantium
            facilis sint nesciunt sunt perspiciatis quis quae nam harum natus
            voluptate labore fuga similique, cum numquam explicabo! At
            blanditiis consequuntur quo quas amet impedit cupiditate soluta
            dicta rerum voluptatem. Eum recusandae illum consequuntur dolor
            iusto nemo. Sint quas sequi accusamus maiores, inventore non? Sunt
            asperiores et veritatis vel aliquid ducimus tenetur obcaecati,
            voluptate est minima omnis dolore qui cumque! Recusandae, similique
            architecto. Suscipit praesentium, nobis dolores quasi dolore sit
            maxime quae ex tempora laboriosam aspernatur. Quam consequuntur
            saepe velit eum suscipit qui deserunt tempore repudiandae ut
            adipisci, laboriosam consequatur? Tempora culpa doloremque fuga
            voluptate porro quo, officiis tempore eius, iure soluta labore
            delectus pariatur, officia quis magni numquam! Voluptatem eum
            voluptatibus nihil dolorum dignissimos nemo inventore ratione
            maiores tempora. Itaque aut asperiores fugiat tenetur ipsa error
            quod aspernatur. Eius quidem soluta iure alias! Architecto
            laudantium ab qui id cupiditate, exercitationem dolorum quidem, ut,
            sapiente libero perferendis a autem esse. Omnis adipisci perferendis
            dolorem repellat esse. Velit laboriosam inventore, esse quisquam
            porro quasi aspernatur ullam provident nisi obcaecati eum expedita
            praesentium hic ipsum delectus ad ducimus facere veniam sint dicta.
            Nobis molestias veniam laborum enim voluptates, numquam natus id
            voluptate perferendis nam quod corporis rem. Reiciendis praesentium
            blanditiis dolore eum nobis laudantium ipsam dolores explicabo
            maiores minus. Eligendi, soluta incidunt? Nam totam dolorum placeat
            soluta porro? Nemo impedit placeat aliquid magni iste quod. Nemo,
            officia vitae omnis aliquid beatae temporibus reprehenderit magni,
            dolor enim laboriosam esse animi non perferendis fugiat? Ut aperiam,
            repudiandae recusandae dolore voluptatem nobis consequatur
            blanditiis sapiente illum id inventore sit ipsam natus impedit
            error. Aliquid fugit possimus laudantium doloribus corporis a in,
            amet libero non eveniet. Illum repellendus molestiae iste vel.
            Asperiores perspiciatis sed accusantium, cum sapiente quod harum
            consectetur laboriosam? Voluptatibus ipsum et obcaecati quam.
            Dolorem quas deleniti perspiciatis earum obcaecati, hic voluptates
            possimus unde. Nisi, impedit. Praesentium libero sint dolores
            facilis voluptate autem harum debitis placeat numquam, beatae
            impedit commodi, repellat corrupti aperiam voluptatem! Iste neque
            obcaecati iusto ex, ipsum animi error! Debitis, assumenda. Culpa
            adipisci odio mollitia facilis cum perferendis nulla ad deserunt,
            quo minus veritatis, voluptates sapiente fuga maiores dolor placeat
            molestias? Perspiciatis sunt esse natus nulla dolore nesciunt
            corrupti sapiente reiciendis. Necessitatibus nesciunt corrupti
            eveniet eum enim non optio, quam reiciendis amet quasi voluptatem
            ipsam quae deleniti odio. Quis voluptatum repellendus optio
            cupiditate? Ipsa aliquam maxime hic praesentium inventore, illo
            consequatur. Impedit rerum, aut molestias soluta maxime alias sit
            reiciendis repellendus deleniti recusandae ex maiores placeat earum!
            Delectus, iure deserunt impedit at reiciendis quia natus fugit
            molestias consequuntur eum quas distinctio.
          </p>
        </div>
      </div>
    </aside>
  );
}
