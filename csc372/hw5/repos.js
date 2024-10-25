import { Octokit } from "https://esm.sh/@octokit/rest";
const container = document.querySelector('.container');
// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: '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'
  });

  async function fetchRepos(){
   
    try{
        const response = await octokit.request('GET /users/{username}/repos', {
            username: 'SPriyanka0',
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          });
          const repos = response.data;
          repos.forEach(repo => fetchRepo_info(repo));

    }catch(error){
        console.error('error fetching repos');
    }
    

  }

  async function fetchRepo_info(repo){
    try{
        //request additional info not included
        const[commits, languages] = await Promise.all(
            [
                octokit.request('GET /repos/{owner}/{repo}/commits', {
                    owner: repo.owner.login,
                    repo: repo.name}),

                octokit.request('GET /repos/{owner}/{repo}/languages', {
                        owner: repo.owner.login,
                        repo: repo.name})
            ]
        );

        //store in variable
        const numberOfCommits = commits.headers['link'] ? parseInt (commits.headers['link'].split(',') [1].match(/&page=(\d+)>; rel="last"/)[1])
        :commits.data.length;
        // const numberOfCommits = Object.keys(commits.data);

        const languagesData = Object.keys(languages.data);

        displayRepo(repo,numberOfCommits,languagesData);
    }catch(error){
        console.error('error - fetchRepo_info()');
    }
  }
  
//   each entry should include the repository name, description, creation date,
// update date, number of commits, list of languages, and the number of watchers

  function displayRepo(repo,numberOfCommits,languagesData){
    const repoDiv = document.createElement('div');
    repoDiv.classList.add('repo');
    repoDiv.innerHTML = `
    <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
    <p> Description: ${repo.description}</p>
    <p> Creation Date: ${new Date(repo.created_at).toLocaleDateString()}</p>
    <p> Update Date: ${new Date(repo.updated_at).toLocaleDateString()}</p>
    <p> Number of Commits:${numberOfCommits}</p>
    <p> Languages: ${languagesData.join(' , ')}</p>
    <p> Number of Watchers: ${repo.watchers_count}</p>
    `;
    container.appendChild(repoDiv);
  }

  fetchRepos();