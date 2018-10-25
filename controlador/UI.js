

exports.showRepositories= function (repositories) {
{
    console.log(repositories)
    let template = '';
    repositories.forEach(repo => {
      template += `
        <div class="card card-body mt-2 animated bounceInUp">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
                <span class="badge badge-primary">
                  Language: ${repo.language}
                </span>
                <span class="badge badge-success">
                  forks: ${repo.forks_count}
                </span>
            </div>
          </div>
        </div>
      `;
    });
    return{template}
  }
}