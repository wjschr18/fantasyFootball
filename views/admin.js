<html>
  <%- include('./navs'); -%>
    <h2 class="">Welcome To The Fantasy Football League!</h2>
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Create A New Team!</h5>
            <p class="card-text">Create a new fantasy team</p>
            <a href="/teams/new" class="btn btn-primary">Start New Team</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Check Overall League Scores</h5>
            <p class="card-text">View every team's scores for the current week</p>
            <a href="/teams/scores" class="btn btn-primary">View Scores</a>
          </div>
        </div>
      </div>
    </div>
  </main>
  </body>

</html>
