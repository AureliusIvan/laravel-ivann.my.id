<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;


class CustomException extends Exception
{

    public static function notAvailable(): self
    {
        return new static(
            "The room is not available for this date.",
            422
        );
    }


    public static function notFound(): self
    {
        return new static(
            "The reservation was not found.",
            404
        );
    }

    public static function notAllowed(): self
    {
        return new static(
            "You are not allowed to perform this action.",
            403
        );
    }

    public static function notAllowedToCancel(): self
    {
        return new static(
            "You are not allowed to cancel this reservation.",
            403
        );
    }

    public static function notAllowedToEdit(): self
    {
        return new static(
            "You are not allowed to edit this reservation.",
            403
        );
    }

    public static function Custom($message): self
    {
        return new static(
            $message,
            // "You are not allowed to edit the status of this reservation.",
            403
        );
    }
}
