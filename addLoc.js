class addLoc{

 static material(){
 return `<div class="container-addLoc"> 

<script src="./helperJS/generator.js"></script>
        <script src="./helperJS/helper.js"></script>

        <div class="input-group mb-3">
            <div class="form-inline" id="results">

                <input type="search" id="locSearch" class="form-control" placeholder="Search location" aria-label="Recipient's username"
                    aria-describedby="button-addon2"/>
                <div id="lister">
                    <ul id="locUl" class="list-group">

                    </ul>

                </div>
            </div>

            <div class="input-group-append">
                <button id="searchBtn" class="btn btn-outline-secondary" type="button">Search</button>
            </div>
        </div>
 </div>`


  }
}