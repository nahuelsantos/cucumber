using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NahuelSantos.Utils;
using System;
using System.Text;

namespace NahuelSantos.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class NumbersController : ControllerBase
    {
        private readonly ILogger<NumbersController> _logger;

        public NumbersController(ILogger<NumbersController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("{number:double}")]
        public ActionResult Get(double number)
        {
            try
            {
                StringBuilder sb = new StringBuilder();

                var wholePartNumber = Convert.ToInt64(number);
                var decimalNumber = Convert.ToInt64((number - Math.Truncate(number)) * 100);

                var wholePartNumberString = NumberConverter.ToWords(wholePartNumber);
                var decimalNumberString = NumberConverter.ToWords(decimalNumber);

                sb.Append(wholePartNumberString).Append(" dollars and ").Append(decimalNumberString).Append(" cents");

                return Ok(new { result = sb.ToString() });
            }
            catch (ArithmeticException)
            {
                return BadRequest(new { error = "Number too big, please try again with a number smaller than a quadrillion." });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error while converting number: " + number);
                return StatusCode(500, new { error = "An error has occurred. Our experts have been notified and are working on this." });
            }

        }
    }
}
