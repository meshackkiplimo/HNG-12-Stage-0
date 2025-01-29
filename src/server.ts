import express from 'express'
import cors from 'cors'


const app = express()


app.use(cors())

app.get('/',(req,res)=>{
    res.json({
        email: "meshackkimaiyo5@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/meshackkiplimo/HNG-12-Stage-0",
    })
})

if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }


export default app


